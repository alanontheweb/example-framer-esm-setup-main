const theme = {
  theme: {
    colors: {
      transparent: "transparent",
      base: {
        0: "hsla(var(--base-0), var(--tw-bg-opacity))",
        50: "hsla(var(--base-50), var(--tw-bg-opacity))",
        100: "hsla(var(--base-100), var(--tw-bg-opacity))",
        200: "hsla(var(--base-200), var(--tw-bg-opacity))",
        300: "hsla(var(--primary-300), var(--tw-bg-opacity))",
        400: "hsla(var(--base-400), var(--tw-bg-opacity))",
        500: "hsla(var(--base-500), var(--tw-bg-opacity))",
        600: "hsla(var(--base-600), var(--tw-bg-opacity))",
        700: "hsla(var(--base-700), var(--tw-bg-opacity))",
        800: "hsla(var(--base-800), var(--tw-bg-opacity))",
        900: "hsla(var(--base-900), var(--tw-bg-opacity))",
        1e3: "hsla(var(--base-1000), var(--tw-bg-opacity))",
        vivid: "hsla(var(--base-vivid), var(--tw-bg-opacity))"
      },
      primary: {
        0: "hsla(var(--primary-0), var(--tw-bg-opacity))",
        50: "hsla(var(--primary-50), var(--tw-bg-opacity))",
        100: "hsla(var(--primary-100), var(--tw-bg-opacity))",
        200: "hsla(var(--primary-200), var(--tw-bg-opacity))",
        300: "hsla(var(--primary-300), var(--tw-bg-opacity))",
        400: "hsla(var(--primary-400), var(--tw-bg-opacity))",
        500: "hsla(var(--primary-500), var(--tw-bg-opacity))",
        600: "hsla(var(--primary-600), var(--tw-bg-opacity))",
        700: "hsla(var(--primary-700), var(--tw-bg-opacity))",
        800: "hsla(var(--primary-800), var(--tw-bg-opacity))",
        900: "hsla(var(--primary-900), var(--tw-bg-opacity))",
        1e3: "hsla(var(--primary-1000), var(--tw-bg-opacity))",
        vivid: "hsla(var(--primary-vivid), var(--tw-bg-opacity))"
      },
      secondary: {
        0: "hsla(var(--secondary-0), var(--tw-bg-opacity))",
        50: "hsla(var(--secondary-50), var(--tw-bg-opacity))",
        100: "hsla(var(--secondary-100), var(--tw-bg-opacity))",
        200: "hsla(var(--secondary-200), var(--tw-bg-opacity))",
        300: "hsla(var(--secondary-300), var(--tw-bg-opacity))",
        400: "hsla(var(--secondary-400), var(--tw-bg-opacity))",
        500: "hsla(var(--secondary-500), var(--tw-bg-opacity))",
        600: "hsla(var(--secondary-600), var(--tw-bg-opacity))",
        700: "hsla(var(--secondary-700), var(--tw-bg-opacity))",
        800: "hsla(var(--secondary-800), var(--tw-bg-opacity))",
        900: "hsla(var(--secondary-900), var(--tw-bg-opacity))",
        1e3: "hsla(var(--secondary-1000), var(--tw-bg-opacity))",
        vivid: "hsla(var(--secondary-vivid), var(--tw-bg-opacity))"
      },
      tertiary: {
        100: "hsla(var(--tertiary-100), var(--tw-bg-opacity))",
        200: "hsla(var(--tertiary-200), var(--tw-bg-opacity))",
        300: "hsla(var(--tertiary-300), var(--tw-bg-opacity))",
        400: "hsla(var(--tertiary-400), var(--tw-bg-opacity))",
        500: "hsla(var(--tertiary-500), var(--tw-bg-opacity))",
        600: "hsla(var(--tertiary-600), var(--tw-bg-opacity))",
        700: "hsla(var(--tertiary-700), var(--tw-bg-opacity))",
        800: "hsla(var(--tertiary-800), var(--tw-bg-opacity))",
        900: "hsla(var(--tertiary-900), var(--tw-bg-opacity))"
      },
      intermediate: {
        100: "hsla(var(--intermediate-100), var(--tw-bg-opacity))",
        200: "hsla(var(--intermediate-200), var(--tw-bg-opacity))",
        300: "hsla(var(--intermediate-300), var(--tw-bg-opacity))",
        400: "hsla(var(--intermediate-400), var(--tw-bg-opacity))",
        500: "hsla(var(--intermediate-500), var(--tw-bg-opacity))",
        600: "hsla(var(--intermediate-600), var(--tw-bg-opacity))",
        700: "hsla(var(--intermediate-700), var(--tw-bg-opacity))",
        800: "hsla(var(--intermediate-800), var(--tw-bg-opacity))",
        900: "hsla(var(--intermediate-900), var(--tw-bg-opacity))"
      },
      accent: {
        100: "hsla(var(--accent-100), var(--tw-bg-opacity))",
        200: "hsla(var(--accent-200), var(--tw-bg-opacity))",
        300: "hsla(var(--accent-300), var(--tw-bg-opacity))",
        400: "hsla(var(--accent-400), var(--tw-bg-opacity))",
        500: "hsla(var(--accent-500), var(--tw-bg-opacity))",
        600: "hsla(var(--accent-600), var(--tw-bg-opacity))",
        700: "hsla(var(--accent-700), var(--tw-bg-opacity))",
        800: "hsla(var(--accent-800), var(--tw-bg-opacity))",
        900: "hsla(var(--accent-900), var(--tw-bg-opacity))"
      },
      success: {
        100: "hsla(var(--success-100), var(--tw-bg-opacity))",
        200: "hsla(var(--success-200), var(--tw-bg-opacity))",
        300: "hsla(var(--success-300), var(--tw-bg-opacity))",
        400: "hsla(var(--success-400), var(--tw-bg-opacity))",
        500: "hsla(var(--success-500), var(--tw-bg-opacity))",
        600: "hsla(var(--success-600), var(--tw-bg-opacity))",
        700: "hsla(var(--success-700), var(--tw-bg-opacity))",
        800: "hsla(var(--success-800), var(--tw-bg-opacity))",
        900: "hsla(var(--success-900), var(--tw-bg-opacity))"
      },
      warning: {
        100: "hsla(var(--warning-100), var(--tw-bg-opacity))",
        200: "hsla(var(--warning-200), var(--tw-bg-opacity))",
        300: "hsla(var(--warning-300), var(--tw-bg-opacity))",
        400: "hsla(var(--warning-400), var(--tw-bg-opacity))",
        500: "hsla(var(--warning-500), var(--tw-bg-opacity))",
        600: "hsla(var(--warning-600), var(--tw-bg-opacity))",
        700: "hsla(var(--warning-700), var(--tw-bg-opacity))",
        800: "hsla(var(--warning-800), var(--tw-bg-opacity))",
        900: "hsla(var(--warning-900), var(--tw-bg-opacity))"
      },
      caution: {
        100: "hsla(var(--caution-100), var(--tw-bg-opacity))",
        200: "hsla(var(--caution-200), var(--tw-bg-opacity))",
        300: "hsla(var(--caution-300), var(--tw-bg-opacity))",
        400: "hsla(var(--caution-400), var(--tw-bg-opacity))",
        500: "hsla(var(--caution-500), var(--tw-bg-opacity))",
        600: "hsla(var(--caution-600), var(--tw-bg-opacity))",
        700: "hsla(var(--caution-700), var(--tw-bg-opacity))",
        800: "hsla(var(--caution-800), var(--tw-bg-opacity))",
        900: "hsla(var(--caution-900), var(--tw-bg-opacity))"
      },
      alert: {
        100: "hsla(var(--alert-100), var(--tw-bg-opacity))",
        200: "hsla(var(--alert-200), var(--tw-bg-opacity))",
        300: "hsla(var(--alert-300), var(--tw-bg-opacity))",
        400: "hsla(var(--alert-400), var(--tw-bg-opacity))",
        500: "hsla(var(--alert-500), var(--tw-bg-opacity))",
        600: "hsla(var(--alert-600), var(--tw-bg-opacity))",
        700: "hsla(var(--alert-700), var(--tw-bg-opacity))",
        800: "hsla(var(--alert-800), var(--tw-bg-opacity))",
        900: "hsla(var(--alert-900), var(--tw-bg-opacity))"
      }
    },
    fontFamily: {
      body: [
        "Inter var",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      headings: ["Red Hat Display"]
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem"
      }
    }
  }
};
export {
  theme
};
