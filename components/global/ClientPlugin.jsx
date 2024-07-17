"use client";

import React from "react";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../../utils/Plugin"));

const ClientPlugin = () => {
  return <DynamicComponent />;
};

export default ClientPlugin;
