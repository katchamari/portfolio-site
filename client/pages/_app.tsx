import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { ReactNode } from "react";
import Header from "@/components/Header/Header";
import { templateTransition } from "@/functions/transitions";
import { LoadingProvider } from "@/contexts/LoadingPage";

type PageWithLayout = {
  getLayout?: (page: ReactNode) => { template: ReactNode; variant: string };
};

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as PageWithLayout).getLayout ??
    ((page: ReactNode) => ({ variant: "fallback", template: page }));
  const layout = getLayout(<Component {...pageProps} />);
  return (
    <LoadingProvider>
      <div className="global-container">
        <Header />
        <AnimatePresence mode="wait">
          <motion.div
            variants={templateTransition}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            key={layout.variant}
          >
            {layout.template}
          </motion.div>
        </AnimatePresence>
      </div>
    </LoadingProvider>
  );
}

export default MyApp;
