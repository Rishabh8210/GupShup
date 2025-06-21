import { useEffect, useRef, useCallback, type MutableRefObject } from "react";

export function useChatScroll<T>(dependency: T): MutableRefObject<HTMLDivElement | null> {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = useCallback(() => {
        const el = containerRef.current;
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [dependency, scrollToBottom]);

    return containerRef;
}
