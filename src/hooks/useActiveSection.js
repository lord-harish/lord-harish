import { useEffect, useState } from 'react';

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.2, rootMargin: '-80px 0px -40% 0px' },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return activeSection;
}
