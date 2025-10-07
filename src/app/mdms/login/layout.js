import { AuthProvider } from "@/context/auth-context";
import SmoothScrollProvider from "@/components/features_cus/SmoothScrollProvider";

export default function mdmsLayout({ children }) {
  return (
    <>
      <AuthProvider>
        <SmoothScrollProvider>
          <div className=" w-[100vw] admin-layout">{children}</div>
        </SmoothScrollProvider>
      </AuthProvider>
    </>
  );
}
