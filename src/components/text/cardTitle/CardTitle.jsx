import { BiLocationPlus } from 'react-icons/bi';

// Title component with consistent prop naming
export const Title = ({ cardTitle }) => {
    return (
      <article className="mb-4 flex">
        <div className='mt-2 text-lg'>
          <BiLocationPlus />
        </div>
        <span className="text-2xl font-bold font-serif text-orange-500">{cardTitle}</span>
      </article>
    );
  }