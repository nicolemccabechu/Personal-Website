const Experience = ({
  title,
  company,
  location,
  range,
  url,
  text1,
  text2,
  text3,
  text4,
  text5,
}) => {
  return (
    <div className="my-3">
      <div className="flex flex-row text-xl">
        <span className="text-white">{title}</span>{' '}
        <span className="text-gray-500">&nbsp;@&nbsp;</span>{' '}
        <span className="text-pink-500">
          <a href={url} className="company">
            {company}
          </a>
        </span>
      </div>
      <div>
        <div className="p-1 font-mono text-sm text-gray-600">{range}</div>
        <div className="p-2">
          <div className="flex flex-row ">
            <div className="text-pink-500 mr-2 text-lg"> &#8227;</div>
            <div className="text-white">{text1}</div>
          </div>
          <div className="flex flex-row">
            <div className="text-pink-500  mr-2 text-lg"> &#8227;</div>
            <div className="text-white">{text2}</div>
          </div>
          <div className="flex flex-row">
            <div className="text-pink-500 mr-2 text-lg"> &#8227;</div>
            <div className="text-white">{text3}</div>
          </div>
          <div className="flex flex-row">
            <div className="text-pink-500 mr-2 text-lg"> &#8227;</div>
            <div className="text-white">{text4}</div>
          </div>
          <div className="flex flex-row">
            <div className="text-pink-500 mr-2 text-lg"> &#8227;</div>
            <div className="text-white">{text5}</div>
          </div>
        </div>
      </div>
      <div className="justify-center text-center text-2xl font-medium text-gray-600">
        &#126;&#126;&#126;
      </div>
    </div>
  )
}

export default Experience
