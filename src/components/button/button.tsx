import React, { ElementType, MouseEventHandler, ReactNode } from 'react';
import { StyledButton } from './styled';
import { ComponentSize } from '../../config/sizes';

export type ButtonType = 'default' | 'primary';

interface BaseButtonProps {
    appearance?: ButtonType;
    icon?: ElementType;
    size?: ComponentSize;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
}

type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;

/**
 * If href is supplied, button becomes an anchor link
 */
type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;

/**
 * If `as` is supplied, button becomes a custom html node specified in `as`
 */
type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseButtonProps;

export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
    const { 
        appearance = 'default',
        size = 'lg',
        className,
        children,
        disabled = false,
        onClick,
        href,
        as,
        to,
    } = props;

    const styles = {
        innerType: appearance,
        size,
        disabled,
        withText: children != null
    }
    
    if (as && !disabled) {
        return (
            <StyledButton
                as={as}
                to={to}
                ref={ref}
                className={className}
                {...styles}
            > {children}
            </StyledButton>
        )
    }

    if (href && !disabled) {
        return (
            <StyledButton
                as='a'
                href={href}
                ref={ref as React.MutableRefObject<HTMLAnchorElement>}
                className={className}
                {...styles}
            > {children}
            </StyledButton>
        );
    }

    return (
        <StyledButton
            as='button'
            type='button'
            onClick={onClick}
            ref={ref as React.MutableRefObject<HTMLButtonElement>}
            className={className}
            {...styles}
        > {children}
        </StyledButton>
    );
}

export default React.forwardRef<unknown, ButtonProps>(Button);