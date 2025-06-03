function MainLayout({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto w-full max-w-[1200px] px-4">{children}</main>;
}

export default MainLayout;
