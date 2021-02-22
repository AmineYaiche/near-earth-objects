import React, { PropsWithChildren } from "react"


export default function ErrorMessage({ children }: PropsWithChildren<{message?:string}>) {
  return <div>{children || "Something went wrong !"}</div>
}