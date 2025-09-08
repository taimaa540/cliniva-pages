import React, { useState, ReactNode } from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "../../components/ui/collapsible";
import { Card, CardContent } from "../../components/ui/card";
import { ChevronDownIcon } from "lucide-react";

// تعريف أنواع الخصائص
interface ReusableCollapsibleProps {
  title?: ReactNode;
  content?: ReactNode;
    dir?: 'rtl' | 'ltr'; 
  initiallyOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  cardClassName?: string;
  titleStyle?: React.CSSProperties;
  showIcon?: boolean;
  customIcon?: ((isOpen: boolean) => ReactNode) | null;
}

const ReusableCollapsible: React.FC<ReusableCollapsibleProps> = ({
  title = "عنوان افتراضي",
  content = <div>محتوى افتراضي</div>,
  initiallyOpen = false,
  onOpenChange,
  
  className = "w-full bg-background-primary mt-5 rounded-2xl",
  cardClassName = "bg-surface-default rounded-2xl p-5",
  titleStyle = {
    fontFamily: "Lato",
    fontWeight: 600,
    fontStyle: "SemiBold",
    fontSize: "16px",
    lineHeight: "124%",
    letterSpacing: "0%",
  },
  showIcon = true,
  customIcon = null,
  dir = 'ltr'
}) => {
const isControlled = onOpenChange !== undefined && initiallyOpen !== undefined;
const [internalOpen, setInternalOpen] = useState<boolean>(initiallyOpen ?? false);
const openState = isControlled ? initiallyOpen! : internalOpen;
  
  const handleOpenChange = (newOpenState: boolean) => {
    if (isControlled && onOpenChange) {
      onOpenChange(newOpenState);
    } else {
      setInternalOpen(newOpenState);
    }
  };
  
  const renderIcon = () => {
    if (customIcon) {
      return customIcon(openState);
    }
    
    return openState ? (
      <div className='text-text-primary'>
      <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.7071 9.70711C17.3166 10.0976 16.6834 10.0976 16.2929 9.70711L9 2.41421L1.70711 9.70711C1.31658 10.0976 0.683416 10.0976 0.292892 9.70711C-0.0976315 9.31658 -0.0976315 8.68342 0.292892 8.29289L8.29289 0.292893C8.68342 -0.0976315 9.31658 -0.0976315 9.70711 0.292893L17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711Z" fill="CurrentColor"/>
      </svg></div>
    ) : (
      <ChevronDownIcon className="w-8 h-8 text-text-primary font-semibold" />
    );
  };

  return (
    <Collapsible 
      open={openState}
      onOpenChange={handleOpenChange}
      className={className}
        dir={dir} 
    >
      <Card className={cardClassName}>
        <CollapsibleTrigger className="w-full rounded-2xl">
          <CardContent className="flex flex-row items-center rounded-2xl justify-between p-0 py-4">
            <div 
              className="text-text-accent font-bold size-16 w-56 text-start"
              style={titleStyle}
            >
              <h2>{title}</h2>
            </div>
            
            {showIcon && renderIcon()}
          </CardContent>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="flex flex-col gap-4 p-0 pt-4">
            {content}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default ReusableCollapsible;