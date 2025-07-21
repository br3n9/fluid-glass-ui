"use client";

import { AlertCircle, CheckCircle, Info, Loader2, X } from 'lucide-react';
import { useEffect, useState, useRef, createContext, useContext } from 'react';

// Contexte pour gérer les toasts de manière globale
const ToastContext = createContext(null);

/**
 * Positions possibles pour les toasts
 */
const POSITIONS = {
  'top-right': 'top-5 right-5',
  'top-left': 'top-5 left-5',
  'top-center': 'top-5 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-5 right-5',
  'bottom-left': 'bottom-5 left-5',
  'bottom-center': 'bottom-5 left-1/2 -translate-x-1/2',
};

/**
 * Animations d'entrée selon la position
 */
const ANIMATIONS = {
  'top-right': 'animate-slide-in-right',
  'top-left': 'animate-slide-in-left',
  'top-center': 'animate-slide-in-top',
  'bottom-right': 'animate-slide-in-right',
  'bottom-left': 'animate-slide-in-left',
  'bottom-center': 'animate-slide-in-bottom',
};

/**
 * Provider pour gérer les toasts
 */
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  
  // Ajouter un toast
  const addToast = (props) => {
    const id = Date.now().toString();
    const newToast = { id, ...props };
    setToasts((prevToasts) => [...prevToasts, newToast]);
    return id;
  };
  
  // Supprimer un toast par son ID
  const removeToast = (id, reason) => {
    setToasts((prevToasts) => {
      const toast = prevToasts.find(t => t.id === id);
      if (toast && toast.onClose) {
        toast.onClose(reason || true);
      }
      return prevToasts.filter(t => t.id !== id);
    });
  };
  
  // Mettre à jour un toast existant
  const updateToast = (id, props) => {
    setToasts((prevToasts) => 
      prevToasts.map(toast => 
        toast.id === id ? { ...toast, ...props } : toast
      )
    );
    return id;
  };
  
  // Créer un toast de chargement
  const loading = (message, options = {}) => {
    return addToast({ 
      type: 'loading', 
      message, 
      autoClose: false, 
      ...options 
    });
  };
  
  // Gérer les promesses avec un toast
  const promise = (promiseOrFn, options) => {
    const { pending, success, error } = options;
    
    const id = addToast({
      type: 'loading',
      message: typeof pending === 'string' ? pending : pending?.render?.() || 'Chargement...',
      autoClose: false,
      ...(typeof pending === 'object' ? pending : {})
    });
    
    const handlePromise = Promise.resolve(typeof promiseOrFn === 'function' ? promiseOrFn() : promiseOrFn);
    
    handlePromise
      .then((data) => {
        const successMessage = typeof success === 'string' 
          ? success 
          : success?.render?.({ data }) || 'Succès';
          
        updateToast(id, {
          type: 'success',
          message: successMessage,
          autoClose: 5000,
          ...(typeof success === 'object' ? success : {})
        });
        
        return data;
      })
      .catch((err) => {
        const errorMessage = typeof error === 'string' 
          ? error 
          : error?.render?.({ data: err }) || 'Une erreur est survenue';
          
        updateToast(id, {
          type: 'error',
          message: errorMessage,
          autoClose: 5000,
          ...(typeof error === 'object' ? error : {})
        });
        
        return Promise.reject(err);
      });
    
    return handlePromise;
  };
  
  // Supprimer tous les toasts
  const dismissAll = () => {
    toasts.forEach(toast => {
      if (toast.onClose) toast.onClose('dismissed');
    });
    setToasts([]);
  };
  
  // Valeurs exposées par le contexte
  const value = {
    toasts,
    addToast,
    removeToast,
    updateToast,
    loading,
    promise,
    dismissAll,
    // Méthodes pour chaque type de toast
    info: (message, options = {}) => addToast({ type: 'info', message, autoClose: 5000, ...options }),
    success: (message, options = {}) => addToast({ type: 'success', message, autoClose: 5000, ...options }),
    warning: (message, options = {}) => addToast({ type: 'warning', message, autoClose: 5000, ...options }),
    error: (message, options = {}) => addToast({ type: 'error', message, autoClose: 5000, ...options }),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

/**
 * Hook pour utiliser les toasts dans n'importe quel composant
 */
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast doit être utilisé à l\'intérieur d\'un ToastProvider');
  }
  return context;
}

/**
 * Conteneur qui affiche tous les toasts actifs
 */
function ToastContainer() {
  const { toasts, removeToast } = useToast();
  
  // Regrouper les toasts par position
  const toastsByPosition = toasts.reduce((acc, toast) => {
    const position = toast.position || 'bottom-right';
    if (!acc[position]) acc[position] = [];
    acc[position].push(toast);
    return acc;
  }, {});

  return Object.entries(toastsByPosition).map(([position, positionToasts]) => (
    <div key={position} className={`fixed z-50 flex flex-col gap-2 ${POSITIONS[position]}`}>
      {positionToasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={(reason) => removeToast(toast.id, reason)} />
      ))}
    </div>
  ));
}

/**
 * Composant Toast individuel
 */
export default function Toast({ 
  id,
  type = 'info', 
  message, 
  onClose,
  autoClose = 5000,
  position = 'bottom-right',
  onOpen,
  isLoading = false
}) {
  const timerRef = useRef(null);
  const [visible, setVisible] = useState(true);
  
  // Icônes pour chaque type de toast
  const icons = {
    info: <Info size={20} className="text-blue-500 mt-0.5" />,
    success: <CheckCircle size={20} className="text-green-500 mt-0.5" />,
    warning: <AlertCircle size={20} className="text-yellow-500 mt-0.5" />,
    error: <AlertCircle size={20} className="text-red-500 mt-0.5" />,
    loading: <Loader2 size={20} className="text-blue-500 mt-0.5 animate-spin" />,
  };

  // Classes CSS pour chaque type de toast
  const containerClasses = {
    info: 'bg-blue-50 border border-blue-200',
    success: 'bg-green-50 border border-green-200',
    warning: 'bg-yellow-50 border border-yellow-200',
    error: 'bg-red-50 border border-red-200',
    loading: 'bg-blue-50 border border-blue-200',
  };
  
  // Appeler onOpen au montage
  useEffect(() => {
    if (onOpen) onOpen();
    
    // Configurer la fermeture automatique si activée
    if (autoClose !== false && !isLoading) {
      timerRef.current = setTimeout(() => {
        setVisible(false);
        setTimeout(() => onClose('timeout'), 300); // Attendre la fin de l'animation
      }, autoClose);
    }
    
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [autoClose, onClose, onOpen, isLoading]);
  
  // Gérer la fermeture manuelle
  const handleClose = () => {
    setVisible(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    setTimeout(() => onClose('dismissed'), 300); // Attendre la fin de l'animation
  };
  
  // Animation de sortie
  const exitAnimation = visible ? 'opacity-100' : 'opacity-0 translate-x-2';
  
  return (
    <div 
      className={`max-w-sm w-full p-4 rounded-lg shadow-lg transition-all duration-300 ${containerClasses[type]} ${ANIMATIONS[position]} ${exitAnimation}`}
    >
      <div className="flex items-start gap-3">
        {icons[type]}
        <div className="flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        {type !== 'loading' && (
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
            <X size={16} />
          </button>
        )}
      </div>
      
      {/* Barre de progression pour autoClose */}
      {autoClose !== false && type !== 'loading' && (
        <div className="mt-2 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
          <div 
            className={`h-full ${type === 'info' ? 'bg-blue-500' : type === 'success' ? 'bg-green-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}
            style={{ 
              width: '100%', 
              animation: `shrink ${autoClose}ms linear forwards` 
            }}
          />
        </div>
      )}
    </div>
  );
}

// Ajouter les fonctions statiques pour permettre l'utilisation sans le hook
Toast.info = (message, options) => {
  console.warn('Toast.info() est déprécié. Utilisez useToast().info() à la place.');
  return null;
};

Toast.success = (message, options) => {
  console.warn('Toast.success() est déprécié. Utilisez useToast().success() à la place.');
  return null;
};

Toast.warning = (message, options) => {
  console.warn('Toast.warning() est déprécié. Utilisez useToast().warning() à la place.');
  return null;
};

Toast.error = (message, options) => {
  console.warn('Toast.error() est déprécié. Utilisez useToast().error() à la place.');
  return null;
};

Toast.loading = (message, options) => {
  console.warn('Toast.loading() est déprécié. Utilisez useToast().loading() à la place.');
  return null;
};

Toast.promise = (promise, options) => {
  console.warn('Toast.promise() est déprécié. Utilisez useToast().promise() à la place.');
  return promise;
};

Toast.dismiss = (id) => {
  console.warn('Toast.dismiss() est déprécié. Utilisez useToast().removeToast() à la place.');
};

Toast.dismissAll = () => {
  console.warn('Toast.dismissAll() est déprécié. Utilisez useToast().dismissAll() à la place.');
};

