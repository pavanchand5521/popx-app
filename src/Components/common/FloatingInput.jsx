import { useState } from "react";

/**
 * FloatingInput — reusable input with a floating label effect.
 *
 * Props:
 *  - label     : string  — the placeholder/label text
 *  - type      : string  — input type (default "text")
 *  - name      : string  — input name attribute
 *  - value     : string  — controlled value
 *  - onChange  : fn      — change handler
 *  - required  : bool    — marks field as required (shows asterisk)
 */
function FloatingInput({ label, type = "text", name, value, onChange, required = false }) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || (value && value.length > 0);

  return (
    <div className={`floating-input-wrapper ${isFloating ? "floating" : ""}`}>
      <label className="floating-label">
        {label}
        {required && <span className="required-star"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="floating-input"
        autoComplete="off"
      />
    </div>
  );
}

export default FloatingInput;
