import React, { ReactElement } from "react";

type FormSectionProps = {
  title: string;
  children: React.ReactNode; // Assuming multiple children. If only one, just use ReactElement
};

const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
  // console.log(` Formsection : < ${title} > has ${children.length} children`);
  // console.log("children", children);
  const onlyOneChild = Boolean(Array.isArray(children) === false);
  const childCount = React.Children.count(children);
  return (
    <section className="rounded border-2 border-solid border-slate-300 p-5 ">
      <h1 className="mb-2 w-fit bg-[#00a35c] p-2 text-white">{title}</h1>

      {childCount === 1 ? (
        <div>{children}</div>
      ) : (
        <div className={`grid grid-cols-${childCount + 1} gap-2`}>
          {children}
        </div>
      )}
    </section>
  );
};

export default FormSection;
