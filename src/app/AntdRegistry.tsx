"use client";

import { ConfigProvider } from "antd";
import React from "react";

export default function AntdRegistry({ children }: { children: React.ReactNode }) {
  return <ConfigProvider>{children}</ConfigProvider>;
}
