import React from "react";
import FilterButton from "./FilterButton";
import { cloud, eyeHide, eyeShow, star } from "../dasboardIcons";

export default function PostFilterButtons() {
  return (
    <div className="w-full lg:w-1/2 mr-auto flex justify-end gap-5 items-center">
      <FilterButton
        title="Download found posts"
        to="/panel/getposts/0"
        icon={cloud}
      />

      <FilterButton
        title="Mark all posts as read"
        to="/panel/hits/0/0/setseen"
        icon={eyeShow}
      />
      <FilterButton
        title="Show only not seen post"
        to="/panel/hits/0/0/notseen"
        icon={eyeHide}
      />
      <FilterButton
        title="Show only Favorites"
        to="/panel/hits/0/0/fav"
        icon={star}
      />

    </div>
  );
}
