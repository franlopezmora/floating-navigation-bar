"use client";
import {
  Home,
  Bell,
  Lightbulb,
  Camera,
  Twitter,
  Github,
  Mail,
  Moon,
  Volume2,
} from "lucide-react";

const icons = [
  { icon: <Home />, label: "Home" },
  { icon: <Bell />, label: "Notificaciones" },
  { icon: <Lightbulb />, label: "Ideas" },
  { icon: <Camera />, label: "Fotos" },
  { icon: <Twitter />, label: "Twitter" },
  { icon: <Github />, label: "GitHub" },
  { icon: <Mail />, label: "Contacto" },
  { icon: <Moon />, label: "Modo nocturno" },
  { icon: <Volume2 />, label: "Sonido" },
];

export default function DockNavigationBar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/30 backdrop-blur-md rounded-full px-4 py-2 flex gap-2 shadow-xl">
      {icons.map((item, index) => (
        <button
          key={index}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition duration-300 text-white"
          title={item.label}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}
