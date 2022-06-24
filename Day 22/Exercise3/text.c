int printf(char *str, ...){
	int i = 0;
	char *p = str;
	while(*p != '\0'){
		if(*p == '%'){
			switch(*(p+1)){
				case 'd':
					printf("%d", va_arg(str, int));
					break;
				case 's':
					printf("%s", va_arg(str, char*));
					break;
				case 'c':
					printf("%c", va_arg(str, int));
					break;
				default:
					printf("%c", *p);
					break;
			}
			p += 2;
		}
		else{
			printf("%c", *p);
			p++;
		}
	}
	return 0;
}