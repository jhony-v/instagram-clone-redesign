export default function StylesThemeVariables() {
  return (
    <style jsx global>
      {`
        :root {
          --itg-app-primary-color: #ff068f;
          --itg-app-secondary-color: #f89512;
          --itg-app-background: #f5f5f5;
          --itg-app-scrollbar-thumb-background:#d1d1d1;
          --itg-navigator-background: #ffffff;
          --itg-navigator-height: 60px;
          --itg-root-dark-alpha-color-00: #ffffff;
          --itg-root-dark-alpha-color-10: #eeeeee;
          --itg-root-dark-alpha-color-20: #e6e5e5;
          --itg-root-dark-alpha-color-30: #e8e8e8;
          --itg-root-dark-alpha-color-40: #dfdfdf;
          --itg-root-dark-alpha-color-50: #888888;
          --itg-root-dark-alpha-color-60: #5e5e5e;
          --itg-root-dark-alpha-color-70: #4b4b4b;
          --itg-root-dark-alpha-color-80: #333333;
          --itg-root-dark-alpha-color-100: #090909;
          --itg-card-color: #ffffff;
          --itg-app-text-call-to-action-color: #3da2e6;
          --itg-app-text-default-color: #111111;
          --itg-app-button-call-to-action-background: #3da2e6;
          --itg-app-button-call-to-action-color: #ffffff;
          --itg-app-icon-default-color: #0e0e0e;
          --itg-reaction-like-default-color: #0e0e0e;
          --itg-reaction-like-active-color: #ff065d;
        }

        body {
          background-color: var(--itg-app-background);
        }
        body::-webkit-scrollbar {
          background-color: transparent;
          width:10px;
        }
        body::-webkit-scrollbar-thumb {
          background-color: var(--itg-app-scrollbar-thumb-background);
          border-radius:10px;
        }
      `}
    </style>
  );
}
