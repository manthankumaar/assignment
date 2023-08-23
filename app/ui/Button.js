const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={` ${className} flex gap-1 justify-center items-center   border rounded-xl p-2`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
