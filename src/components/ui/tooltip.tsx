import { Tooltip as TooltipPrimitive } from "radix-ui";

export function Tooltip({
    children,
    content,
    open,
    defaultOpen,
    onOpenChange,
    ...props
}: {
    children: React.ReactNode;
    content: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}) {
    return (
        <TooltipPrimitive.Root
            open={open}
            defaultOpen={defaultOpen}
            onOpenChange={onOpenChange}
        >
            <TooltipPrimitive.Trigger asChild>
                {children}
            </TooltipPrimitive.Trigger>
            <TooltipPrimitive.Content
                side="top"
                align="center"
                {...props}
                className="z-50 overflow-hidden rounded-lg bg-gray-700 px-2 py-1.5 text-xs text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
            >
                {content}
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
    );
}
