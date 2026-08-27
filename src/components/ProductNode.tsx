"use client";

import {
  Handle,
  Position,
  type Node,
  type NodeProps,
} from "@xyflow/react";

export type ProductNodeData = {
  [key: string]: unknown;

  label: string;
  category: string;
  role: string;

  image?: string;
  emphasis?: boolean;
};

export type ProductFlowNode = Node<
  ProductNodeData,
  "productNode"
>;

export default function ProductNode({
  data,
}: NodeProps<ProductFlowNode>) {
  return (
    <div
      className={`w-[300px] overflow-hidden rounded-2xl bg-entes-surface shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl ${
        data.emphasis
          ? "border-2 border-entes-accent ring-4 ring-entes-accent/20"
          : "border border-entes-border"
      }`}
    >
      {/* Üstten gelen bağlantı */}
      <Handle
        type="target"
        position={Position.Top}
        className="!h-3 !w-3 !border-2 !border-white !bg-entes-primary"
      />

      {/* Alttan çıkan bağlantı */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!h-3 !w-3 !border-2 !border-white !bg-entes-primary"
      />

      {/* Ürün Görseli */}
      <div className="flex h-[150px] items-center justify-center border-b border-entes-border bg-entes-surface-muted">
        {data.image ? (
          <img
            src={data.image}
            alt={data.label}
            className="h-full w-full object-contain p-4"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-entes-text-muted">
            <span className="text-3xl">◈</span>

            <span className="mt-2 text-[11px]">
              Ürün görseli
            </span>
          </div>
        )}
      </div>

      {/* Ürün Bilgisi */}
      <div className="p-4">
        {/* Kategori + Seçili Ürün */}
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-entes-surface-muted px-2.5 py-1 text-[10px] font-semibold text-entes-text-muted">
            {data.category}
          </span>

          {data.emphasis && (
            <span className="rounded-full bg-entes-accent px-2.5 py-1 text-[10px] font-bold text-black">
              Seçilen Ürün
            </span>
          )}
        </div>

        {/* Ürün Adı */}
        <h3 className="text-base font-bold leading-6 text-entes-text">
          {data.label}
        </h3>

        {/* Sistemdeki Rol */}
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-entes-text-muted">
          {data.role}
        </p>
      </div>

      {/* Seçili ürün için alt vurgu */}
      {data.emphasis && (
        <div className="h-1.5 w-full bg-entes-accent" />
      )}
    </div>
  );
}