import React, { useEffect } from 'react';

interface CardValidatorProps {
  cardNumber: string; // القيمة تأتي من المكون الأب
  onValidationChange: (isValid: boolean) => void; // ترجع النتيجة إلى المكون الأب
}

const CardValidator: React.FC<CardValidatorProps> = ({ cardNumber, onValidationChange }) => {
  // خوارزمية التحقق من رقم البطاقة
  const isValidCardNumber = (number: string): boolean => {
    const cleanNumber = number.replace(/\D/g, '');
    let sum = 0;
    let shouldDouble = false;

    for (let i = cleanNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanNumber.charAt(i), 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  useEffect(() => {
    if (cardNumber.length > 0) {
      const isValid = isValidCardNumber(cardNumber);
      onValidationChange(isValid);
    } else {
      onValidationChange(false); // أو null حسب رغبتك
    }
  }, [cardNumber]);

  return null; // ما في UI هون لأنه فقط وظيفي
};

export default CardValidator;
