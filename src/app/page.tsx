import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
} from '@icons-pack/react-simple-icons'
import Nav from '@/components/nav'

export default function Home() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:johndoe@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/johndoe',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/johndoe/',
    },
    {
      icon: SiMedium,
      href: 'https://medium.com/@johndoe',
    },
  ]

  return (
    <div className="outline-border rounded-base w500:grid-cols-1 grid h-[800px] max-h-[100dvh] w-[1000px] max-w-[1000px] shadow-[10px_10px_0_0_#000] outline-4 portrait:h-[100dvh]">
      {/* <header className="border-r-border rounded-l-base bg-main w500:hidden relative flex items-center justify-center border-r-4 portrait:rounded-none">
        <h1 className="smallHeight:text-[30px] smallHeight:tracking-[2px] w600:text-[30px] w600:tracking-[2px] -rotate-90 text-[40px] font-bold tracking-[4px] whitespace-nowrap">
          <span className="text-main-foreground inline-block">
            JOHN DOE
          </span>
        </h1>
      </header> */}
      <main className="rounded-br-base rounded-tr-base bg-background relative  h-[800px] max-h-[100dvh] flex-col font-semibold portrait:h-[100dvh] portrait:max-h-[100dvh] portrait:rounded-none">
        <Nav />
        <div className="main h-full max-h-[750px] overflow-y-auto portrait:max-h-[calc(100dvh-50px)] flex">
          <div className="p-10 text-xl self-center">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
              doloremque dolores accusamus rerum hic unde!
            </p>
          </div>
        </div>
      </main>
    </div>

  )
}
