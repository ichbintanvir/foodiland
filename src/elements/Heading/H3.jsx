import { cn } from "../../../lib/cn"

const H3 = ({ children, className }) => {
  return (
    <h3
      className={cn(
        `font-semibold text-black 
         text-[20px]        // Mobile default
         sm:text-[28px]     // Small tablets
         md:text-[32px]     // Medium tablets
         lg:text-[36px]     // Large screens`,
        className
      )}
    >
      {children}
    </h3>
  )
}

export default H3
