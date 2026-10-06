import React from 'react';
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
  ShieldCheck,
  Upload,
  ArrowRight,
  Info,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onOpenPrescriptionModal
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 500 || subtotal === 0 ? 0 : 49;
  const total = subtotal + deliveryFee;

  const hasRxItem = cartItems.some((item) => item.isRx);

  const handleCheckout = () => {
    soundFx.playSuccessFanfare();
    confetti({ particleCount: 80, spread: 60 });
    alert(`Order Placed Successfully! Reference #ORD-PHARM-${Math.floor(1000 + Math.random() * 9000)}. Licensed pharmacy partner dispatched.`);
    onClose();
  };

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} className="text-emerald-600" />
            <h3 className="text-lg font-extrabold text-slate-900">Your Pharmacy Cart</h3>
            <span className="cart-count-pill">{cartItems.length} items</span>
          </div>
          <button onClick={onClose} className="close-btn">×</button>
        </div>

        {/* Free Delivery Goal Banner */}
        <div className="free-delivery-banner">
          {subtotal >= 500 ? (
            <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
              <CheckCircle2 size={14} className="text-emerald-600" /> Free Express 2-Hour Delivery Unlocked!
            </span>
          ) : (
            <span className="text-xs text-slate-600">
              Add <strong>₹{500 - subtotal}</strong> more for Free Delivery!
            </span>
          )}
        </div>

        {/* Prescription Required Notice */}
        {hasRxItem && (
          <div className="rx-cart-alert">
            <Info size={16} className="text-rose-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-rose-900">
              <p className="font-bold">Prescription Required (Rx)</p>
              <p>Your cart contains prescription drugs. Please upload your doctor's prescription for pharmacy verification.</p>
              <button
                type="button"
                onClick={() => { onClose(); if (onOpenPrescriptionModal) onOpenPrescriptionModal(); }}
                className="text-xs font-bold text-rose-700 underline mt-1 block"
              >
                Upload Prescription Now →
              </button>
            </div>
          </div>
        )}

        {/* Cart Items List */}
        <div className="cart-items-scroll-list">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <ShoppingCart size={48} className="text-slate-300 mb-2 mx-auto" />
              <p className="text-sm font-bold text-slate-700">Your cart is empty</p>
              <span className="text-xs text-slate-400">Explore our genuine medicine catalog</span>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item-row">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <span className="text-xs text-slate-500">{item.packSize}</span>
                  <div className="cart-item-price">₹{item.price}</div>
                </div>

                <div className="cart-qty-controls">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="qty-btn"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="qty-number">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="qty-btn"
                  >
                    <Plus size={12} />
                  </button>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="btn-trash-item"
                  title="Remove"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Cart Drawer Footer with Price Summary */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="price-breakdown-box">
              <div className="breakdown-row">
                <span>Item Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="breakdown-row">
                <span>Delivery Charge</span>
                <span>{deliveryFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `₹${deliveryFee}`}</span>
              </div>
              <div className="breakdown-row total-row">
                <span>Total Amount Payable</span>
                <span className="total-amount-val">₹{total}</span>
              </div>
            </div>

            <div className="compliance-mini-text">
              <ShieldCheck size={13} className="text-emerald-600 inline mr-1" />
              Fulfilled directly by licensed neighborhood chemist partner.
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              className="btn-checkout-cart"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
