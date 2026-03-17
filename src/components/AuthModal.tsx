import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: Props) {

  const [isRegister, setIsRegister] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 animate-fadeIn">

      <div className="relative w-[420px] p-8 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl text-white animate-scaleIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <X />
        </button>

        <h2 className="text-3xl font-bold text-center mb-6">
          {isRegister ? "Register" : "Login"}
        </h2>

        {isRegister && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 rounded-lg bg-white/90 text-black"
          />
        )}

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded-lg bg-white/90 text-black"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-white/90 text-black"
        />

        <button className="w-full bg-primary py-3 rounded-lg font-semibold text-primary-foreground hover:bg-primary/90 transition">
          {isRegister ? "Register" : "Login"}
        </button>

        <p className="text-center mt-4 text-sm">
          {isRegister ? "Already have an account?" : "Don't have an account?"}

          <span
            onClick={() => setIsRegister(!isRegister)}
            className="ml-2 text-green-300 cursor-pointer hover:underline"
          >
            {isRegister ? "Login" : "Register"}
          </span>
        </p>

      </div>

    </div>
  );
}