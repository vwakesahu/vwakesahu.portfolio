import React, { useState } from "react";

const Story = ({ title, description, icons }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="grid gap-4 mt-7 md:mt-0">
      <div className="flex justify-between gap-4">
        <p className="text-3xl md:text-[3rem] font-semibold leading-loose">
          {title}
        </p>
        <div className="flex gap-3 items-center text-2xl">
          {icons.map((IconComponent, index) => (
            <IconComponent
              key={index}
              className="cursor-pointer hover:text-primary transition-all ease-in-out hover:scale-125"
            />
          ))}
        </div>
      </div>

      <div className="hidden md:flex">
        <p
          className="text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div className="md:hidden">
        {isExpanded ? (
          <div className="transition-all duration-1000 ease-in-out">
            <p
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <p className="text-blue-500" onClick={handleToggle}>
              Read Less
            </p>
          </div>
        ) : (
          <div className="transition-all duration-1000 ease-in-out">
            <p
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html: description.slice(0, 450) + "...",
              }}
            />
            <p className="text-blue-500" onClick={handleToggle}>
              Read More
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export { Story };
