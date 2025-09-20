import { cn } from "../../../lib/cn"

const H2 = ({ children, className }) => {
  return (
    <h2
      className={cn(
        `font-semibold text-black 
         text-[24px]        // Mobile default
         sm:text-[32px]     // Small tablets
         md:text-[40px]     // Medium tablets
         lg:text-[48px]     // Large screens
         leading-5 `,
        className
      )}
    >
      {children}
    </h2>
  )
}

export default H2
