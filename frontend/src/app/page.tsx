import Image from "next/image";

const headers = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
};

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/why-choose-us-sections?populate=*`,
    { headers, cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  const json = await res.json();
  return json.data as Section[];
}

type Feature = {
  id: number;
  title: string;
  description: string;
};

type Section = {
  id: number;
  section_title: string;
  section_subtitle: string;
  section_description: string;
  highlight_title: string;
  highlight_text: string;
  main_image: {
    url: string;
  };
  features_list: Feature[];
};

export default async function Home() {
  const sections = await getData();

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-white space-y-16">
      {sections.map((section) => {
        const {
          id,
          section_title,
          section_subtitle,
          section_description,
          highlight_title,
          highlight_text,
          main_image,
          features_list,
        } = section;

        const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${main_image?.url}`;

        return (
          <div key={id}>
            {/* Section Header */}
            <div className="text-center mb-12 px-4">
              <h5 className="text-sm text-gray-600 mb-2">{section_title}</h5>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{section_subtitle}</h2>
              <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto">{section_description}</p>
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
              {/* Left Image + Highlight */}
              <div className="w-full lg:w-1/2 relative flex justify-center">
                <div className="relative w-[300px] sm:w-[350px] md:w-[400px] aspect-square rounded-full">
                  <div className="absolute inset-0 rounded-full z-0 -left-1/2" />
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt="Section Image"
                      fill
                      className="object-cover rounded-full z-10"
                    />
                  )}
                  {/* Highlight Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-20 w-[300px] sm:w-[350px] md:w-[400px] aspect-square rounded-full bg-rose-600 opacity-50 -left-1/2">
                    <h4 className="text-white font-semibold text-xl md:text-2xl mb-2">
                      {highlight_title}
                    </h4>
                    <p className="text-sm text-white max-w-xs">{highlight_text}</p>
                  </div>
                </div>
              </div>

              {/* Right Features */}
              <div className="w-full lg:w-1/2 space-y-4">
                {features_list?.map((feature) => (
                  <div
                    key={feature.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-100 rounded-full p-4 gap-4"
                  >
                    <div className="bg-rose-600 text-white rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap">
                      {feature.title}
                    </div>
                    <div className="text-gray-700 text-sm">{feature.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}