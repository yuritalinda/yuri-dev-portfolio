import ProyectoDetail from "@yuri-web-portfolio/components/proyecto-detail";

export default function ProyectoDetailpage() {
  return (
    <>
      <section className="mt-20 mx-auto md:w-3/4   ">
        <div className="relative   ">
          <img src="/next.svg" className="bg-lime-400" />
          <div className="p-4 ">
            <a
              href="#"
              className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
            >
              Nutrition
            </a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              Pellentesque a consectetur velit, ac molestie ipsum. Donec
              sodales, massa et auctor.
            </h2>
            <div className="flex mt-3">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {" "}
                  Mike Sullivan{" "}
                </p>
                <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 mx-auto text-lg leading-relaxed bg-orange-700">
          <p className="pb-6">
            Exquisite cordially mr happiness of neglected distrusts. Boisterous
            impossible unaffected he me everything. Is fine loud deal an rent
            open give. Find upon and sent spot song son eyes. Do endeavor he
            differed carriage is learning my graceful. Feel plan know is he like
            on pure. See burst found sir met think hopes are marry among.
            Delightful remarkably new assistance saw literature mrs favourable.
          </p>

          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            Uneasy barton seeing remark happen his has
          </h2>

          <p className="pb-6">
            Guest it he tears aware as. Make my no cold of need. He been past in
            by my hard. Warmly thrown oh he common future. Otherwise concealed
            favourite frankness on be at dashwoods defective at. Sympathize
            interested simplicity at do projecting increasing terminated. As
            edward settle limits at in.
          </p>

          <p className="pb-6">
            Dashwood contempt on mr unlocked resolved provided of of. Stanhill
            wondered it it welcomed oh. Hundred no prudent he however smiling at
            an offence. If earnestly extremity he he propriety something
            admitting convinced ye. Pleasant in to although as if differed
            horrible. Mirth his quick its set front enjoy hoped had there. Who
            connection imprudence middletons too but increasing celebrated
            principles joy. Herself too improve gay winding ask expense are
            compact. New all paid few hard pure she.
          </p>

          <p className="pb-6">
            Breakfast agreeable incommode departure it an. By ignorant at on
            wondered relation. Enough at tastes really so cousin am of.
            Extensive therefore supported by extremity of contented. Is pursuit
            compact demesne invited elderly be. View him she roof tell her case
            has sigh. Moreover is possible he admitted sociable concerns. By in
            cold no less been sent hard hill.
          </p>

          <p className="pb-6">
            Detract yet delight written farther his general. If in so bred at
            dare rose lose good. Feel and make two real miss use easy.
            Celebrated delightful an especially increasing instrument am.
            Indulgence contrasted sufficient to unpleasant in in insensible
            favourable. Latter remark hunted enough vulgar say man. Sitting
            hearted on it without me.
          </p>
        </div>
      </section>
    </>
  );
}
