import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/utils';

const buttonVariants = cva(
    "inline-flex items-center justify-center font-bold transition-all shadow-sm font-display focus:outline-none",
    {
        variants: {
            variant: {
                primary: "bg-primary text-white hover:bg-primary-hover shadow-primary/20 hover:-translate-y-1 shadow-lg",
                outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent hover:-translate-y-1",
                ghost: "bg-white border text-text-primary hover:text-primary hover:border-primary hover:-translate-y-1",
            },
            size: {
                default: "px-8 py-4 rounded-lg",
                sm: "px-6 py-3 rounded-md text-sm",
                lg: "px-10 py-5 rounded-xl text-lg",
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        }
    }
);

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, VariantProps<typeof buttonVariants> {
    children: ReactNode;
    href?: string;
    className?: string;
    external?: boolean;
}

export default function Button({
    children,
    variant,
    size,
    href,
    className,
    external = false,
    ...props
}: ButtonProps) {
    const combinedClassName = cn(buttonVariants({ variant, size, className }));

    if (href) {
        if (external || href.startsWith('tel:') || href.startsWith('mailto:')) {
            return (
                <a href={href} className={combinedClassName} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
