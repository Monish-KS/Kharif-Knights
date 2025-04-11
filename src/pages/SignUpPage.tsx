import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useLanguage } from '@/hooks/useLanguage';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '@/lib/auth';

const SignUpPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [kissanId, setKissanId] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(kissanId)) {
      alert("Please enter a valid email address for Kissan ID.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (signup(kissanId, name, phoneNumber, password)) {
      // Store user details in local storage
      localStorage.setItem('kissanId', kissanId);
      localStorage.setItem('name', name);
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('password', password);

      alert('Sign up successful! Please log in.');
      navigate('/login');
    } else {
      alert('Sign up failed. User already exists.');
    }
  };

  return (
    <div className="min-h-screen bg-e-dark text-white">
      <Navbar />
      <div className="container mx-auto flex items-center justify-center px-4 py-16">
        <Card className="w-full max-w-md bg-e-dark-accent border-gray-800">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">{t('signup.title')}</CardTitle>
            <CardDescription>{t('signup.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t('signup.nameLabel')}</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t('signup.namePlaceholder')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-e-dark border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">{t('signup.phoneNumberLabel')}</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder={t('signup.phoneNumberPlaceholder')}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="bg-e-dark border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t('signup.kissanIdLabel')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('signup.kissanIdPlaceholder')}
                  value={kissanId}
                  onChange={(e) => setKissanId(e.target.value)}
                  required
                  className="bg-e-dark border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t('signup.passwordLabel')}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={t('signup.passwordPlaceholder')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-e-dark border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">{t('signup.confirmPasswordLabel')}</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder={t('signup.confirmPasswordPlaceholder')}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-e-dark border-gray-700"
                />
              </div>
              <Button type="submit" className="w-full bg-e-green hover:bg-e-green/80 text-black">
                {t('signup.signUpButton')}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center text-sm">
            <p>{t('signup.alreadyAccount')}</p>
            <Link to="/login" className="text-e-blue hover:underline">
              {t('signup.loginLink')}
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;