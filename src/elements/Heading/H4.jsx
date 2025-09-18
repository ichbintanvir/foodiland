import { cn } from "../../../lib/cn"

const H4 = ({ children, className }) => {
  return (
    <h4
      className={cn(
        `font-semibold text-black 
         text-[18px]        // Mobile default
         sm:text-[24px]     // Small tablets
         md:text-[28px]     // Medium tablets
         lg:text-[32px]     // Large screens`,
        className
      )}
    >
      {children}
    </h4>
  )
}

export default H4
