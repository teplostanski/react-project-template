import defaultClassNames from './{{pascalCase name}}.module.scss'
import type { HTMLAttributes, ReactNode } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  className?: string,
  classNames?: Partial<Record<keyof typeof defaultClassNames | 'wrapper', string>>,
  wrapped?: boolean,
  children?: ReactNode
}

export const {{pascalCase name}} = ({ className, classNames, wrapped = false, children, ...props }: Props) => {
  const cs = {...defaultClassNames, ...(classNames || {}), ...(className && { {{snakeCase name}}: className })}

  const content = (
    <>
      <div className={cs.{{snakeCase name}} } {...props}></div>
    </>
  )

  return wrapped ? <div className={cs.wrapper}>{content}</div> : content
}