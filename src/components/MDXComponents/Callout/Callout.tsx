import { FC, ReactNode } from 'react'
import clsx from 'clsx'

import { Danger, Info } from '@/components/Icons'

type CalloutVariant = 'info' | 'danger'

const ICONS = {
  info: {
    className: 'text-primary info-icon',
    Component: Info,
  },
  danger: {
    className: 'text-orange-600',
    Component: Danger,
  },
}

type CalloutProps = {
  variant: CalloutVariant
  label?: string
  children: ReactNode
}

const bgColor = {
  info: 'bg-blue-100/70 dark:bg-sky-900/10',
  danger: 'bg-yellow-100/70 dark:bg-yellow-700/10',
}

const labelBgColor = {
  info: 'bg-blue-600 dark:bg-blue-800',
  danger: 'bg-orange-500/80 dark:bg-orange-600/80',
}

const Callout: FC<CalloutProps> = ({ variant = 'info', children, label }) => {
  const Icon = ICONS[variant]

  return (
    <aside className={clsx(bgColor[variant], 'text-primary-color callout relative my-10 rounded-md p-6')}>
      {!label && (
        <div className='absolute right-[-24px] top-[-24px] rounded-lg bg-primary p-1.5 has-[svg.info-icon]:right-[-16px] has-[svg.info-icon]:top-[-16px] has-[svg.info-icon]:rounded-full'>
          <Icon.Component size='32' className={Icon.className} />
        </div>
      )}
      {label && (
        <div
          className={clsx(
            labelBgColor[variant],
            'text-primary-color absolute right-[-8px] top-[-20px] select-none rounded-lg p-2.5 font-medium leading-4'
          )}>
          {label}
        </div>
      )}

      {children}
    </aside>
  )
}

export default Callout
