import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
        {title}
      </h2>
      <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
      {subtitle && (
        <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;