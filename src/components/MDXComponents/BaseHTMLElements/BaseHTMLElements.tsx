import { ComponentPropsWithRef, createElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: string }) => {
    let slug = slugify(children)
    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }
}

const Headings = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
}

function CustomLink(props: ComponentPropsWithRef<'a'>) {
  let href = props.href || '/'

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props} className='internal-link'>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} />
  }

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a target='_blank' rel='noopener noreferrer' {...props} className='external-link' />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className='rounded-lg' {...props} />
}

export { CustomLink, Headings, RoundedImage }
