import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Vous pouvez personnaliser ce rendu d'erreur
      return this.props.fallback || (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 p-6">
          <div className="glass p-8 rounded-lg max-w-lg text-center">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Une erreur s'est produite</h2>
            <p className="text-slate-300 mb-4">Essayez de rafraîchir la page ou de contacter le support technique.</p>
            <div className="bg-slate-800 p-4 rounded-md mb-4 text-left overflow-auto max-h-40">
              <pre className="text-red-300 text-sm">{this.state.error?.toString()}</pre>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Rafraîchir la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;