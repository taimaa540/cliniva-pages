import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'patient' | 'other';
}

interface ApiResponse {
  user: User;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // جلب المستخدم الحالي (session check)
  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      try {
        const res = await fetch('/api/me');
        if (!res.ok) {
          setUser(null);
          return;
        }
        const data: ApiResponse = await res.json();
        setUser(data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  // تسجيل الدخول
  const login = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        return { ok: false, error: 'Invalid credentials' };
      }

      const data: ApiResponse = await res.json();
      setUser(data.user);

      return { ok: true, user: data.user };
    } catch (err) {
      return { ok: false, error: 'Network error' };
    }
  };

  // تسجيل الخروج
  const logout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
    } catch (err) {
      // ممكن تضيف log error
    } finally {
      setUser(null);
      navigate('/');
    }
  };

  // توجيه حسب الدور
  const redirectBasedOnRole = (user: User): void => {
    switch (user.role) {
      case "admin":
        navigate("/admin/dashboard");
        break;
      case "patient":
        navigate("/patient/home");
        break;
      default:
        navigate("/");
    }
  };

  return { user, isLoading, login, logout, redirectBasedOnRole };
}
