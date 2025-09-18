import { cn } from "../../../lib/cn"

const P4 = ({ children, className }) => {
  return (
    <p
      className={cn(
        `font-bold text-black 
         text-[14px]        // Mobile default
         sm:text-[15px]     // Small tablets
         md:text-[16px]     // Medium tablets
         lg:text-[16px]     // Large screens`,
        className
      )}
    >
      {children}
    </p>
  )
}

export default P4
