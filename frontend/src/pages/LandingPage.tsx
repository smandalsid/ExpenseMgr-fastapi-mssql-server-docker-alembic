import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, TrendingUp, Shield, Sparkles, ChevronRight } from 'lucide-react';
import Login from '../components/Login';
import Register from '../components/Register';

type ViewMode = 'landing' | 'login' | 'register';

export default function LandingPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('landing');

  const handleLoginSuccess = (token: string) => {
    console.log('Login successful!', token);
    // Redirect to dashboard or handle authentication
    window.location.href = '/dashboard';
  };

  const handleRegisterSuccess = () => {
    setViewMode('login');
  };

  if (viewMode === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <Login
            onSuccess={handleLoginSuccess}
            onSwitchToRegister={() => setViewMode('register')}
          />
        </AnimatePresence>
      </div>
    );
  }

  if (viewMode === 'register') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <Register
            onSuccess={handleRegisterSuccess}
            onSwitchToLogin={() => setViewMode('login')}
          />
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="p-2 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              ExpenseMgr
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-3"
          >
            <button
              onClick={() => setViewMode('login')}
              className="px-6 py-2 text-primary-600 font-semibold hover:bg-primary-50 rounded-lg transition-colors"
            >
              Sign In
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('register')}
              className="px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                Smart Expense Management
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Take Control of Your{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Finances
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Track, manage, and optimize your expenses with ease. Get insights into your spending
              habits and make smarter financial decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('register')}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Today
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('login')}
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl border-2 border-primary-200 hover:border-primary-300 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Sign In
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary-600 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Real-time Analytics</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Get instant insights into your spending patterns
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="p-4 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-secondary-600 rounded-lg">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Secure & Private</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Your financial data is encrypted and protected
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg">
                      <Wallet className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Smart Budgeting</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Set budgets and get alerts when you're close to limits
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-2xl opacity-30"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-full blur-2xl opacity-30"
            />
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="container mx-auto px-4 py-8 mt-16 border-t border-gray-200"
      >
        <div className="text-center text-gray-600">
          <p>&copy; 2025 ExpenseMgr. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}

