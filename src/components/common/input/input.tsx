import styles from './input.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onEnter: () => void
  className?: string
}

export const Input = ({ className = '', onEnter, ...other }: Props) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEnter()
    }
  }

  return <input {...other} className={`${styles.input} ${className}`} onKeyDown={handleKeyDown} />
}
