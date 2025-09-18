import { cn } from "../../../lib/cn"

const P5 = ({ children, className }) => {
  return (
    <p
      className={cn(
        `font-semibold text-black 
         text-[12px]        // Mobile default
         sm:text-[13px]     // Small tablets
         md:text-[14px]     // Medium tablets
         lg:text-[14px]     // Large screens`,
        className
      )}
    >
      {children}
    </p>
  )
}

export default P5
