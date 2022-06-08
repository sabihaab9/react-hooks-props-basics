import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  return (
    <div id="blog-post">
    
      //The syntax for creating props for a React component
      // is the same as the syntax for writing attributes for an HTML tag.


      //we render the BlogContent component and...
      //create a prop called articleText in parent component ("BlogPost") that we assign a value of "Dear Reader..." 
      //this value is accessible from within the BlogContent component as props.articleText

      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}

export default BlogPost;
