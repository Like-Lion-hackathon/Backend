package com.example.hkp.Service;

public interface filterServiceImpl {

    //해시태그 필터링
    public String hashTag(String hashTag);

    //색 필터링
    public String colorExtraction(String RGB);

    //아이템 필터링
    public String itemType(String item);

    //좋아요 수 필터링
    public String likeNumber(String number);
}
