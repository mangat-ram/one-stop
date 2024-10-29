import { navs } from "../data"

export const Navbar = () => {
  return (
    <section className="h-[80px] w-full bg-cyan-400 flex justify-between px-[60px]">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl">OneStop</h1>
      </div>
      <div className="flex justify-center items-center p-2">
        {navs.map((nav) => (
          <p className="px-4 text-[18px]" key={nav}>{nav}</p>
        ))}
      </div>
    </section>
  )
}