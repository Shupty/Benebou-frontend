"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const FREE_SHIPPING_THRESHOLD = 100;

// Replace with your real cart state (Context, Zustand, Redux, server data, etc.)
const initialItems = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    variant: "Black / M",
    price: 29.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80",
  },
  {
    id: 2,
    name: "Minimal Leather Sneakers",
    variant: "White / 42",
    price: 79.0,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&q=80",
  },
  {
    id: 3,
    name: "Everyday Canvas Tote",
    variant: "Natural",
    price: 24.5,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&q=80",
  },
];

const formatPrice = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

const HeaderCart = () => {
  const [items, setItems] = useState(initialItems);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const remainingForFreeShipping = Math.max(
    FREE_SHIPPING_THRESHOLD - subtotal,
    0
  );
  const shippingProgress = Math.min(
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
    100
  );

  const updateQuantity = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label={`Open cart, ${totalItems} items`}
          className="relative size-5 text-secondary flex items-center justify-center shrink-0"
        >
          <ShoppingBag className="size-5" />
          {totalItems > 0 && (
            <span className="absolute  -bottom-2.5 -right-2.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-white">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        {/* Header */}
        <SheetHeader className="border-b px-6 py-4 text-left">
          <SheetTitle className="flex items-center gap-2">
            Shopping Cart
            <span className="text-sm font-normal text-muted-foreground">
              ({totalItems} {totalItems === 1 ? "item" : "items"})
            </span>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Review the items in your cart before checkout.
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="size-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-lg font-semibold">Your cart is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Looks like you haven&apos;t added anything yet.
              </p>
            </div>
            <SheetClose asChild>
              <Button asChild>
                <Link href="/shop">Start shopping</Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            {/* Free shipping progress */}
            <div className="border-b bg-muted/40 px-6 py-3">
              <div className="mb-2 flex items-center gap-2 text-sm">
                <Truck className="size-4 text-primary" />
                {remainingForFreeShipping > 0 ? (
                  <p>
                    Add{" "}
                    <span className="font-semibold">
                      {formatPrice(remainingForFreeShipping)}
                    </span>{" "}
                    more for free shipping
                  </p>
                ) : (
                  <p className="font-medium text-primary">
                    You&apos;ve unlocked free shipping!
                  </p>
                )}
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>

            {/* Items */}
            <ul className="flex-1 divide-y overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 py-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-20 shrink-0 rounded-lg border object-cover"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-medium leading-tight">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-muted-foreground transition-colors hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity stepper */}
                      <div className="flex items-center rounded-full border">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                          className="flex size-7 items-center justify-center rounded-full transition-colors hover:bg-muted disabled:opacity-40"
                        >
                          <Minus className="size-3" />
                        </button>
                        <span className="w-7 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Increase quantity"
                          className="flex size-7 items-center justify-center rounded-full transition-colors hover:bg-muted"
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>

                      <p className="text-sm font-semibold">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <SheetFooter className="mt-auto flex-col gap-3 border-t bg-background px-6 py-5 sm:flex-col sm:space-x-0">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>
                    {remainingForFreeShipping > 0
                      ? "Calculated at checkout"
                      : "Free"}
                  </span>
                </div>
                <div className="flex justify-between pt-2 text-base font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>

              <SheetClose asChild>
                <Button asChild size="lg" className="w-full">
                  <Link href="/checkout">Checkout</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/cart">View full cart</Link>
                </Button>
              </SheetClose>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default HeaderCart;
