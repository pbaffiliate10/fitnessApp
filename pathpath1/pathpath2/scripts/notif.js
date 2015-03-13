/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 msg = '{"Content":"testing android push with isprod = false"}';
	return push(["APA91bHS2X4bhBL8e3lw-WRBiLl593iIXj0jl6W8Qm2MgWG8c6fZ2EpGzRC76JcIjOXQJpMTNM9iMVH5Zs35fXOixNqi7G-p5ITRMPEOz-L4eh0zS1gPpqBD1KPJflT3l_NqZpxdZqt-Uplav-Zc0inZhyWrhLqR9-wHCkKCz3B73XFGtNx4UUY", "INVALIDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"], msg , "android", false);    							