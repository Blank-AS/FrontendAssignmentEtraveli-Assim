/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const appStyle = (theme: any) => css({
  backgroundColor: theme.appBackgroundColor,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const parentStyle = css({
  overflow: "hidden",
  display: "flex",
  flex: 1,
  "@media (max-width: 1167px)": {
    flexDirection: "column",
  },
});

export const separatorStyle = css({
  border: 'none',
  borderTop: '1px solid #ccc',
  width: '100%',
});