import { ImageListItem, ImageList } from "@mui/material";

export function ImageGallery({ images }) {
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={200}>
      {images?.map((item) => (
        <ImageListItem key={item}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="Note image"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
