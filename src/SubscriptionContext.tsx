import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface SubscriptionContextType {
  subscribedIds: Set<string>;
  subscribe: (creatorId: string) => void;
  unsubscribe: (creatorId: string) => void;
  isSubscribed: (creatorId: string) => boolean;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const SubscriptionProvider = ({ children }: { children: ReactNode }) => {
  const [subscribedIds, setSubscribedIds] = useState<Set<string>>(new Set());

  const subscribe = (creatorId: string) => {
    setSubscribedIds((prev) => {
      const next = new Set(prev);
      next.add(creatorId);
      return next;
    });
  };

  const unsubscribe = (creatorId: string) => {
    setSubscribedIds((prev) => {
      const next = new Set(prev);
      next.delete(creatorId);
      return next;
    });
  };

  const isSubscribed = (creatorId: string) => subscribedIds.has(creatorId);

  return (
    <SubscriptionContext.Provider value={{ subscribedIds, subscribe, unsubscribe, isSubscribed }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};
